<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\File;
use Illuminate\Support\Facades\Storage;
class InvoiceController extends Controller
{
    public function index(){
        return view('invoice.index');
    }
    public function invoiceCreate(Request $request){
        $data = $request->data;
        $path = 'json/invoice.json';
        $file = file_get_contents($path);
        $json = json_decode($file);
        $json[] = $data;
        file_put_contents($path,json_encode($json));
        return response()->json($data);
    }
}
