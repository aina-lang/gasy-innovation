<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Notifications\UserConfirmation;
use Exception;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        //     $validator = Validator::make($request->all(), [
        //         'name' => 'required|string|max:155',
        //         'email' => 'required|string|email|max:155|unique:users',
        //         'password' => 'required|string|min:8',
        //     ]);

        //     if ($validator->fails()) {
        //         return response(['errors' => $validator->errors()], 422);
        //     }
        $user = User::all()->where("email", "=", $request->email)->first();
        try {
            if ($user) {
                return response(['error' => 'un utilisateur deja inscrit avec cet email'], 401);
            } else {
                $user = new User([
                    'name' => $request->name,
                    'email' => $request->email,
                    'password' => Hash::make($request->password),
                    'confirmation_token' => Str::random(60),
                ]);
                $user->save();

                // $user->notify(new UserConfirmation);
                return response(['success' => 'Inscription réussie.'], 200);
            }
        } catch (Exception $e) {
            // var_dump($e->getMessage());exit;
            return response(['error' => 'Les informations d\'identification fournies sont incorrectes.'], 401);
        }
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        $user = User::all()->where("email", "=", $request->email)->first();
        try {
            if ($user) {
                if (!Hash::check($request->password, $user->password)) {
                    return response(['error' => 'mot de passe incorrect'], 401);
                } else {
                    if (Auth::attempt($credentials)) {
                        $token = $user->createToken('auth_token')->accessToken;
                        return response(['success' => 'utilisateur authentifié avec succées', 'user' => $user, 'token' => $token], 200);
                    }
                }
            } else {
                return response(['error' => 'aucun utilisateur avec cet email'], 401);
            }
        } catch (Exception $e) {
            return response(['error' => 'Les informations d\'identification fournies sont incorrectes.'], 401);
        }
    }

    public function logout(Request $request)
    {
       
        try {
            $user = Auth::user();
            $user->token()->revoke();  
            return response(['success' => 'Déconnexion réussie.'], 200);
        } catch (\Exception $th) {
            var_dump($th->getMessage());exit;
        }
    }
}
