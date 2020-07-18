<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Hash;

class PasswordController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function renew()
    {
        return view('password.renew');
    }
    public function RenewPost(Request $req)
    {
      if($req->email && $req->password){
        $email = $req->email;
        $password = Hash::make($req->password);
        $file_path = 'json/admin.json';
        $file = file_get_contents($file_path);
        $adminuser = json_decode($file);
        foreach($adminuser as $admin)
        {
          if($email == $admin->{'email'})
          {
            $admin->{'password'} = $password;
          }
        }
        file_put_contents($file_path, json_encode($adminuser));
        $file_path = 'json/employeeregistration/user.json';
        $file = file_get_contents($file_path);
        $employeeuser = json_decode($file);
        foreach($employeeuser as $employee)
        {
          if($email == $employee->{'email'})
          {
            $employee->{'password'} = $password;
          }
        }
        file_put_contents($file_path, json_encode($employeeuser));
        $file_path = 'json/businessregistration/user.json';
        $file = file_get_contents($file_path);
        $businessuser = json_decode($file);
        foreach($businessuser as $business)
        {
          if($email == $business->{'email'})
          {
            $business->{'password'} = $password;
          }
        }
        file_put_contents($file_path, json_encode($businessuser));
        return 'password changed';
      }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
