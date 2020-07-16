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
use App\Mail\attachmail;
use Illuminate\Support\Facades\Mail;
use PDF;
use Illuminate\Http\RedirectResponse;


class IndexController extends Controller
{
    public function index() {
        return redirect('/client_main/client_main_content');
    }
    public function gotoAdmin(Request $req) {
      if($req->session()->get('role')=='admin')
      {
        return view('admin');
      }
      return back();
    }
    public function gotoEmployee(Request $req)
    {
      if($req->session()->get('role')=='admin' || $req->session()->get('role')=='employee')
      {
        return view('employee');
      }
      return back();
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
    public function gotoMain(Request $request) {
        return view('main')->with('fileName',$request->fileName);
    }
    public function gotoInner(Request $request) {
        return view('inner')->with('fileName',$request->fileName);
    }
    public function gotoInner2(Request $request) {
        return view('inner2')->with('fileName',$request->fileName);
    }
    public function gotoInner3(Request $request) {
        return view('inner3')->with('fileName',$request->fileName);
    }
    public function gotoInner4(Request $request) {
        return view('inner4')->with('fileName',$request->fileName);
    }

    public function gotoInnerblank(Request $request) {
        return view('innerblank')->with('fileName',$request->fileName);
    }

    public function gotoInnerblank2(Request $request) {
        return view('innerblank2')->with('fileName',$request->fileName);
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
      else
      {
        $obj = end($json);
        $id = $obj->{'id'} + 1;
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
      $mail = 'kanrar.pratim@gmail.com';
      Mail::to($mail)->send(new DemoEmail('View: localhost:8000/businessregistration/show/'.$id.'<br>'.'Approve: localhost:8000/businessregistration/validate/'.$id));
      $file_path = 'json/agreement.json';
      $file = file_get_contents($file_path);
      $agreement = json_decode($file);
      $terminate = $agreement->{'terminate'};
      $insurance = $agreement->{'insurance'};
      $coverage = $agreement->{'coverage'};
      $advance = $agreement->{'advance'};
      $failure = $agreement->{'failure'};
      $fees = $agreement->{'fees'};
      $penalty = $agreement->{'penalty'};
      $represent = $agreement->{'represent'};
      $idemnification = $agreement->{'idemnification'};
      $confidentiality = $agreement->{'confidentiality'};
      $inspections = $agreement->{'inspections'};
      $excuse = $agreement->{'excuse'};
      $vendor = $agreement->{'vendor'};
      $waiver = $agreement->{'waiver'};
      $miscellaneous = $agreement->{'miscellaneous'};
      $severability = $agreement->{'severability'};
      $subcontract = $agreement->{'subcontract'};
      $definition = $agreement->{'definition'};
      $nondisclosure = $agreement->{'nondisclosure'};
      $use = $agreement->{'use'};
      $permitted = $agreement->{'permitted'};
      $return = $agreement->{'return'};
      $negotiation = $agreement->{'negotiation'};
      $term = $agreement->{'term'};
      $rights = $agreement->{'rights'};
      $future = $agreement->{'future'};
      $amendments = $agreement->{'amendments'};
      $severance = $agreement->{'severance'};
      $law = $agreement->{'law'};
      $general = $agreement->{'general'};
      $file_path = 'json/businessregistration/user.json';
      $file = file_get_contents($file_path);
      $user = json_decode($file);
      foreach ($user as $obj)
      {
        if($obj->{'id'}==$id)
        {
          $x = $obj;
        }
      }
      $address = $x->{'street'}.', '.$x->{'city'}.', '.$x->{'country'}.' - '.$x->{'pin'};
      $sign = 'json/businessregistration/signatures/'.$id.'.png';
      $data = ['description'=>$description, 'terminate'=>$terminate, 'insurance'=>$insurance, 'coverage'=>$coverage, 'advance'=>$advance, 'failure'=>$failure, 'fees'=>$fees, 'penalty'=>$penalty, 'represent'=>$represent, 'idemnification'=>$idemnification, 'confidentiality'=>$confidentiality,
      'inspections'=>$inspections, 'excuse'=>$excuse, 'vendor'=>$vendor, 'waiver'=>$waiver, 'miscellaneous'=>$miscellaneous, 'severability'=>$severability, 'subcontract'=>$subcontract,
      'definition'=>$definition, 'nondisclosure'=>$nondisclosure, 'use'=>$use, 'permitted'=>$permitted, 'return'=>$return, 'negotiation'=>$negotiation, 'term'=>$term, 'rights'=>$rights, 'future'=>$future,
      'amendments'=>$amendments, 'severance'=>$severance, 'law'=>$law, 'general'=>$general, 'name'=>$x->{'name'}, 'address'=>$address, 'sign'=>$sign];
      $pdf = PDF::loadView('pdfview', $data);
      $pdf->save('json/businessregistration/'.$id.'.pdf');
      Mail::to($x->{'mail'})->send(new attachmail($id));
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
      else
      {
        $obj = end($json);
        $id = $obj->{'id'} + 1;
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
      $mail = 'support@ndedge.com';
      Mail::to($mail)->send(new DemoEmail('View: localhost:8000/employeeregistration/show/'.$id.'<br>'.'Approve: localhost:8000/employeeregistration/validate/'.$id));
      return response()->json($user);
    }
    public function sendOtp(Request $request)
    {
      $num = rand(1000,9999);
      $result = LaravelMsg91::sendOtp($request->mobile, $num, "Your otp for phone verification is ".$num);
      return 'sent otp';
    }
    public function validateOtp(Request $request)
    {
      $result = LaravelMsg91::verifyOtp($request->mobile, $request->otp);
      if($result)
      {
        return response()->json(array('validated'=>true));
      }
      return 'false';
    }
    public function validateBusiness($id)
    {
      $file_path = 'json/businessregistration/user.json';
      $file = file_get_contents($file_path);
      $json = json_decode($file);
      foreach ($json as $obj) {
        if($obj->{'id'}==$id)
        {
          $obj->{'validated'} = true;
        }
      }
      file_put_contents($file_path, json_encode($json));
      return 'Business User Validated';
    }
    public function validateEmployee($id)
    {
      $file_path = 'json/employeeregistration/user.json';
      $file = file_get_contents($file_path);
      $json = json_decode($file);
      foreach ($json as $obj) {
        if($obj->{'id'}==$id)
        {
          $obj->{'validated'} = true;
        }
      }
      file_put_contents($file_path, json_encode($json));
      return 'Employee Validated';
    }
    public function showBusiness($id)
    {
      $file_path = 'json/businessregistration/user.json';
      $file = file_get_contents($file_path);
      $user = json_decode($file);
      $file_path = 'json/businessregistration/project.json';
      $file = file_get_contents($file_path);
      $project = json_decode($file);
      foreach ($user as $obj)
      {
        if($obj->{'id'}==$id)
        {
          $x = $obj;
        }
      }
      foreach ($project as $obj)
      {
      if($obj->{'id'}==$id)
        {
          $x = (object)array_merge((array)$x, (array)$obj);
        }
      }
      return response()->json($x);
    }
    public function showEmployee($id)
    {
      $file_path = 'json/employeeregistration/user.json';
      $file = file_get_contents($file_path);
      $user = json_decode($file);
      $file_path = 'json/employeeregistration/project.json';
      $file = file_get_contents($file_path);
      $project = json_decode($file);
      foreach ($user as $obj)
      {
        if($obj->{'id'}==$id)
        {
          $x = $obj;
        }
      }
      foreach ($project as $obj)
      {
      if($obj->{'id'}==$id)
        {
          $x = (object)array_merge((array)$x, (array)$obj);
        }
      }
      return response()->json($x);
    }
    public function pdf(Request $request)
    {
      $file_path = 'json/agreement.json';
      $file = file_get_contents($file_path);
      $agreement = json_decode($file);
      $terminate = $agreement->{'terminate'};
      $insurance = $agreement->{'insurance'};
      $coverage = $agreement->{'coverage'};
      $advance = $agreement->{'advance'};
      $failure = $agreement->{'failure'};
      $fees = $agreement->{'fees'};
      $penalty = $agreement->{'penalty'};
      $represent = $agreement->{'represent'};
      $idemnification = $agreement->{'idemnification'};
      $confidentiality = $agreement->{'confidentiality'};
      $inspections = $agreement->{'inspections'};
      $excuse = $agreement->{'excuse'};
      $vendor = $agreement->{'vendor'};
      $waiver = $agreement->{'waiver'};
      $miscellaneous = $agreement->{'miscellaneous'};
      $severability = $agreement->{'severability'};
      $subcontract = $agreement->{'subcontract'};
      $definition = $agreement->{'definition'};
      $nondisclosure = $agreement->{'nondisclosure'};
      $use = $agreement->{'use'};
      $permitted = $agreement->{'permitted'};
      $return = $agreement->{'return'};
      $negotiation = $agreement->{'negotiation'};
      $term = $agreement->{'term'};
      $rights = $agreement->{'rights'};
      $future = $agreement->{'future'};
      $amendments = $agreement->{'amendments'};
      $severance = $agreement->{'severance'};
      $law = $agreement->{'law'};
      $general = $agreement->{'general'};
      $sign = 'json/businessregistration/signatures/1.png';
      $data = ['description'=>'description', 'terminate'=>$terminate, 'insurance'=>$insurance, 'coverage'=>$coverage, 'advance'=>$advance, 'failure'=>$failure, 'fees'=>$fees, 'penalty'=>$penalty, 'represent'=>$represent, 'idemnification'=>$idemnification, 'confidentiality'=>$confidentiality,
      'inspections'=>$inspections, 'excuse'=>$excuse, 'vendor'=>$vendor, 'waiver'=>$waiver, 'miscellaneous'=>$miscellaneous, 'severability'=>$severability, 'subcontract'=>$subcontract,
      'definition'=>$definition, 'nondisclosure'=>$nondisclosure, 'use'=>$use, 'permitted'=>$permitted, 'return'=>$return, 'negotiation'=>$negotiation, 'term'=>$term, 'rights'=>$rights, 'future'=>$future,
      'amendments'=>$amendments, 'severance'=>$severance, 'law'=>$law, 'general'=>$general, 'sign'=>$sign];
      $pdf = PDF::loadView('pdfview', $data);
      $pdf->save('hi.pdf');
      return $pdf->download('hi.pdf');;
    }
    public function login(Request $req)
    {
      $email = $req->email;
      $password = $req->password;
      $file_path = 'json/admin.json';
      $file = file_get_contents($file_path);
      $adminuser = json_decode($file);
      foreach($adminuser as $admin)
      {
        if($email == $admin->{'email'})
        {
          if($password == $admin->{'password'})
          {
            $req->session()->regenerate();
            $req->session()->put(['role'=>$admin->{'role'}, 'name'=>$admin->{'name'}, 'email'=>$admin->{'email'}]);
            return 'admin';
          }
        }
      }
      $file_path = 'json/employeeregistration/user.json';
      $file = file_get_contents($file_path);
      $employeeuser = json_decode($file);
      foreach($employeeuser as $employee)
      {
        if($email == $employee->{'email'})
        {
          if(Hash::check($password, $employee->{'password'}))
          {
            if($employee->{'validated'} == true)
            {
              $req->session()->regenerate();
              $req->session()->put(['role'=>$employee->{'role'}, 'name'=>$employee->{'name'}, 'email'=>$employee->{'email'}, 'mobile'=>$employee->{'mobile'}]);
              return 'employee';
            }
            else
            {
              return back()->with('error', 'Your account has not been approved by admin');
            }
          }
        }
      }
      $file_path = 'json/businessregistration/user.json';
      $file = file_get_contents($file_path);
      $businessuser = json_decode($file);
      foreach($businessuser as $business)
      {
        if($email == $business->{'email'})
        {
          if(Hash::check($password, $business->{'password'}))
          {
            if($business->{'validated'} == true)
            {
              $req->session()->regenerate();
              $req->session()->put(['role'=>$business->{'role'}, 'name'=>$business->{'name'}, 'email'=>$business->{'email'}, 'mobile'=>$business->{'mobile'}]);
              return 'client';
            }
            else
            {
              return back()->with('error', 'Your account has not been approved by admin');
            }
          }
        }
      }
      return back()->with('error', 'Wrong Credentials');
    }
    public function logout(Request $req)
    {
      $req->session()->forget('role');
      return redirect('/client_main/client_main_content');
    }
}
