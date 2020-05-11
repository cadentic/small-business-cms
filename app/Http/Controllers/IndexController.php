<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Hash;


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
      $name = $request->name;
      $email = $request->email;
      $password = Hash::make($request->password);
      $country = $request->country;
      $street = $request->street;
      $city = $request->city;
      $mobile = $request->mobile;
      $pin = $request->pin;
      $signature = $request->signature;
      $user = array('name'=>$name, 'email'=>$email, 'password'=>$password, 'mobile'=>$mobile, 'country'=>$country, 'street'=>$street, 'city'=>$city, 'pin'=>$pin,'signature'=>$signature, 'date'=>date('Y-m-d H:i:s'));
      $file_path = 'json/user1.json';
      $file = file_get_contents($file_path);
      $json = json_decode($file);
      $json[] = $user;
      file_put_contents('json/user1.json',json_encode($json));
      return response()->json($user);
    }
    public function postLoginThree(Request $request){
      $name = $request->name;
      $email = $request->email;
      $password = Hash::make($request->password);
      $country = $request->country;
      $street = $request->street;
      $city = $request->city;
      $mobile = $request->mobile;
      $pin = $request->pin;
      $business = $request->businessName;
      $cin = $request->cinNumber;
      $tax = $request->taxNumber;
      $signature = $request->signature;
      $user = array('name'=>$name, 'email'=>$email, 'password'=>$password, 'mobile'=>$mobile, 'country'=>$country, 'street'=>$street, 'city'=>$city, 'pin'=>$pin,'businessName'=>$business, 'cinNumber'=>$cin, 'signature'=>$signature, 'taxNumber'=>$tax, 'date'=>date('Y-m-d H:i:s'));
      $file_path = 'json/user3.json';
      $file = file_get_contents($file_path);
      $json = json_decode($file);
      $json[] = $user;
      file_put_contents('json/user3.json',json_encode($json));
      return response()->json($user);
    }
    public function postLoginTwo(Request $request){
      $name = $request->name;
      $description = $request->description;
      $skills = $request->skills;
      $minimumBudget = $request->minimumBudget;
      $maximumBudget = $request->maximumBudget;
      $pricePerHour = $request->pricePerHour;
      $signature = $request->signature;
      $currency = $request->currency;
      $user = array('name'=>$name, 'description'=>$description, 'currency'=>$currency, 'minimumBudget'=>$minimumBudget, 'maximumBudget'=>$maximumBudget, 'pricePerHour'=>$pricePerHour, 'signature'=>$signature, 'date'=>date('Y-m-d H:i:s'));
      $file_path = 'json/user2.json';
      $file = file_get_contents($file_path);
      $json = json_decode($file);
      $json[] = $user;
      file_put_contents('json/user2.json',json_encode($json));
      return response()->json($user);
    }
}
