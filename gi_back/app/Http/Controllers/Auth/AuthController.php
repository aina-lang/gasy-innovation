<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:155',
            'email' => 'required|string|email|max:155|unique:users',
            'password' => 'required|string|min:8',
        ]);

        if ($validator->fails()) {
            return response(['errors' => $validator->errors()], 422);
        }

        $user = new User([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);
        $user->save();

        return response(['message' => 'Inscription réussie.'], 200);
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = Auth()->user->createToken('auth_token')->accessToken;
            return response(['user' => $user, 'access_token' => $token], 200);
        }

        return response(['error' => 'Les informations d\'identification fournies sont incorrectes.'], 401);
    }

    public function logout(Request $request)
    {
        // $user = Auth::user();
        Auth()->user->token()->revoke();
        return response(['message' => 'Déconnexion réussie.'], 200);
    }
}
