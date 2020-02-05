<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
class TransactionHistoryController extends Controller
{
    public function getHistory(){
        $path = 'json/transaction_history.json';
        $get = file_get_contents($path);
        $json = json_decode($get);
        return response()->json($json);
    }
}
