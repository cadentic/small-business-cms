<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function isValid(){

    }
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


}
