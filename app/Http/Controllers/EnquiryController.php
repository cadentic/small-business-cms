<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\File;
use Illuminate\Support\Facades\Storage;
class EnquiryController extends Controller
{
    public function index(){
        return view('enquiry.index');
    }
    public function post(Request $request){
        $name = $request->name;
        $email = $request->email;
        $message = $request->message;
        $enquiry = array('name'=>$name,'email'=>$email,'message'=>$message,'date'=>date('Y-m-d H:i:s'));
        
        $file_path = 'json/enquiry.json';
        $file = file_get_contents($file_path);
        $json = json_decode($file);
        $json[] = $enquiry;
        file_put_contents('json/enquiry.json',json_encode($json));
        return response()->json($enquiry);
    }
}
