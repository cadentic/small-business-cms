<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use App\Mail\DemoEmail;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public $otp = 0;
    public function sendEmail(Request $req)
    {
        $mail = $req->email;
        $this->otp = rand(1000, 9999);
        Mail::to($mail)->send(new DemoEmail($this->otp));
        $file_path = 'json/emailotp.json';
        $file = file_get_contents($file_path);
        $json = json_decode($file);
        $json = $this->otp;
        file_put_contents('json/emailotp.json',json_encode($json));
        return 'sent mail';
    }
    public function validateEmail(Request $req)
    {
      $file_path = 'json/emailotp.json';
      $file = file_get_contents($file_path);
      $this->otp = json_decode($file);
      if($this->otp==$req->emailotp)
      {
        return response()->json(array('validated'=>true));
      }
      return response()->json(array('validated'=>false));
    }
}
