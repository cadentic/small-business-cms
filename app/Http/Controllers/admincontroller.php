<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
class admincontroller extends Controller
{
    public function getProducts(){
        $path = 'json/product.json';
        $get = file_get_contents($path);
        $json = json_decode($get);
        return response()->json($json);
    }
    public function addProduct(Request $request){
        $name = $request->name;
        $path = 'json/product.json';
        $get = file_get_contents($path);
        $json = json_decode($get);
        $json[] = $name;
        file_put_contents($path,json_encode($json));
        return response()->json($name);
    }
    public function getInvoices(){
        $path = 'json/invoice.json';
        
        $json = json_decode(file_get_contents($path));
        return response()->json($json);
    }
}
