<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Hash;
use Intervention\Image\Facades\Image;
use RobinCSamuel\LaravelMsg91\Facades\LaravelMsg91;
use App\Mail\DemoEmail;
use Illuminate\Support\Facades\Mail;


class IndexController extends Controller
{
    public function index() {
        return redirect('/client_main');
    }
    public function gotoAdmin() {
        return view('admin');
    }
    public function gotoLoginOne() {
        return view('loginone');
    }
    public function gotoLoginTwo() {
        return view('logintwo');
    }
    public function gotoLoginFour() {
        return view('loginfour');
    }
    public function gotoLoginThree() {
        return view('loginthree');
    }
    public function gotoMain() {
        return view('main');
    }
    public function gotoInner() {
        return view('inner');
    }
    public function gotoInner2() {
        return view('inner2');
    }
    public function gotoInner3() {
        return view('inner3');
    }
    public function gotoInner4() {
        return view('inner4');
    }

    public function gotoInnerblank() {
        return view('innerblank');
    }

    public function gotoInnerblank2() {
        return view('innerblank2');
    }

    public function import_menu() {
        $url = 'menu.json'; // path to your JSON file
        $data = file_get_contents($url); // put the contents of the file into a variable
        $characters = json_decode($data); // decode the JSON feed

        return $data;
    }
    public function export_menu(Request $req) {
        $json_data = json_encode($req->body);
        file_put_contents('menu.json', $json_data);

        return $req;
    }

    public function import_client_main() {
        $url = 'client_main_content.json'; // path to your JSON file
        $data = file_get_contents($url); // put the contents of the file into a variable
        $characters = json_decode($data); // decode the JSON feed

        return $data;
    }

    //added by classic
    public function addItems(){
        return view('admin_products');
    }

    public function invoices(){
        return view('invoices');
    }
    public function postLoginOne(Request $request){
      $file_path = 'json/employeeregistration/user.json';
      $file = file_get_contents($file_path);
      $json = json_decode($file);
      if(empty($json))
      {
        $id = 1;
      }
      else {
        $id = end($json)['id'] + 1;
        reset($json);
      }
      $name = $request->firstName.' '.$request->lastName;
      $email = $request->email;
      $password = Hash::make($request->password);
      $country = $request->country;
      $street = $request->street;
      $city = $request->city;
      $mobile = $request->mobile;
      $pin = $request->pin;
      $date = date('Y-m-d H:i:s');
      $user = array('id'=>$id, 'name'=>$name, 'email'=>$email, 'password'=>$password, 'mobile'=>$mobile, 'country'=>$country, 'street'=>$street, 'city'=>$city, 'pin'=>$pin, 'role'=>'employee', 'date'=>$date, 'validated'=>false);
      $json[] = $user;
      file_put_contents($file_path,json_encode($json));
      $image = Image::make($request->get('signature'));
      $file_path = 'json/employeeregistration/signatures/'.$id.'.png';
      $image->save($file_path);
      return response()->json($user);
    }
    public function postLoginThree(Request $request){
      $file_path = 'json/businessregistration/user.json';
      $file = file_get_contents($file_path);
      $json = json_decode($file);
      if(empty($json))
      {
        $id = 1;
      }
      else
      {
        $obj = end($json);
        $id = $obj->{'id'} + 1;
        reset($json);
      }
      $name = $request->firstName.' '.$request->lastName;
      $email = $request->email;
      $password = Hash::make($request->password);
      $country = $request->country;
      $street = $request->street;
      $city = $request->city;
      $mobile = $request->mobile;
      $date = date('Y-m-d H:i:s');
      $pin = $request->pin;
      $business = $request->businessName;
      $cin = $request->cinNumber;
      $tax = $request->taxNumber;
      $user = array('id'=>$id, 'name'=>$name, 'email'=>$email, 'password'=>$password, 'mobile'=>$mobile, 'country'=>$country, 'street'=>$street, 'city'=>$city, 'pin'=>$pin,'businessName'=>$business, 'cinNumber'=>$cin, 'taxNumber'=>$tax, 'role'=>'business', 'date'=>$date, 'validated'=>false);
      $json[] = $user;
      file_put_contents($file_path,json_encode($json));
      $image = Image::make($request->get('signature'));
      $file_path = 'json/businessregistration/signatures/'.$id.'.png';
      $image->save($file_path);
      return response()->json($user);
    }
    public function postLoginTwo(Request $request){
      $file_path = 'json/businessregistration/project.json';
      $file = file_get_contents($file_path);
      $json = json_decode($file);
      if(empty($json))
      {
        $id = 1;
      }
      else {
        $id = end($json)['id'] + 1;
        reset($json);
      }
      $name = $request->name;
      $description = $request->description;
      $skills = $request->skills;
      $minimumBudget = $request->minimumBudget;
      $maximumBudget = $request->maximumBudget;
      $pricePerHour = $request->pricePerHour;
      $currency = $request->currency;
      $user = array('id'=>$id, 'name'=>$name, 'description'=>$description, 'currency'=>$currency, 'minimumBudget'=>$minimumBudget, 'maximumBudget'=>$maximumBudget, 'pricePerHour'=>$pricePerHour, 'date'=>date('Y-m-d H:i:s'));
      $json[] = $user;
      file_put_contents($file_path,json_encode($json));
      return response()->json($user);
    }
    public function postLoginFour(Request $request){
      $file_path = 'json/employeeregistration/project.json';
      $file = file_get_contents($file_path);
      $json = json_decode($file);
      if(empty($json))
      {
        $id = 1;
      }
      else {
        $id = end($json)['id'] + 1;
        reset($json);
      }
      $name = $request->name;
      $description = $request->description;
      $skills = $request->skills;
      $minimumBudget = $request->minimumBudget;
      $maximumBudget = $request->maximumBudget;
      $pricePerHour = $request->pricePerHour;
      $currency = $request->currency;
      $user = array('id'=>$id, 'name'=>$name, 'description'=>$description, 'currency'=>$currency, 'minimumBudget'=>$minimumBudget, 'maximumBudget'=>$maximumBudget, 'pricePerHour'=>$pricePerHour, 'date'=>date('Y-m-d H:i:s'));
      $json[] = $user;
      file_put_contents($file_path, json_encode($json));
      return response()->json($user);
    }
    public function sendOtp(Request $request)
    {
      $num = rand(1000,9999);
      //$result = LaravelMsg91::sendOtp($request->mobile, $num, "Your otp for phone verification is ".$num);
      return 'sent otp';
    }
    public function validateOtp(Request $request)
    {
      //$result = LaravelMsg91::verifyOtp($request->mobile, $request->otp);
      //if($result)
      if($request->otp==1729)
      {
        return response()->json(array('validated'=>true));
      }
      return 'false';
    }
}
