<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\RedirectResponse;
use App\Mail\notification;
use Illuminate\Support\Facades\Mail;


class ContactUsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('contact-us.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('contact-us.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $ticket_id
     * @return \Illuminate\Http\Response
     */
    public function show($ticket_id)
    {
        return view('contact-us.show', compact('ticket_id'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

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
    public function createPost(Request $req)
    {
      $file_path = 'json/contact-us-history.json';
      $file = file_get_contents($file_path);
      $json = json_decode($file);
      $data = $json->{'tickets'};
      if(empty($data))
      {
        $id = 112035689;
      }
      else
      {
        $obj = end($data);
        $id = $obj->{'ticket_number'} + 1;
        reset($data);
      }
      $date = date('d/m/Y');
      $ticket = ['ticket_number'=>$id, 'subject'=>$req->subject, 'status'=>'Customer updated', 'created_date'=>$date, 'closed_date'=>''];
      $data[] = $ticket;
      $json->{'tickets'} = $data;
      file_put_contents($file_path, json_encode($json));
      $file_path = 'json/tickets/'.$id.'.json';
      $ticket_data = [['name'=>$req->firstname.' '.$req->lastname, 'email'=>$req->mail, 'company'=>$req->company, 'subject'=>$req->subject, 'additional'=>$req->additional, 'details'=>$req->details, 'category'=>$req->category, 'country'=>$req->country, 'files'=>$req->files, 'replier'=>'client']];
      file_put_contents($file_path, json_encode($ticket_data));
      $mail = 'support@ndedges.com';
      Mail::to($mail)->send(new notification('New support ticket raised with ticket id '.$id));
      return 'ticket created successfully';
    }
    public function save_to_json(Request $req)
    {
      $to = $req->to;
      $ticket = $req->ticket;
      file_put_contents(public_path($to), json_encode($ticket));
      return 'hi';
    }
    public function update($ticket_id, Request $req)
    {
      $file_path = 'json/tickets/'.$ticket_id.'.json';
      $file = file_get_contents($file_path);
      $json = json_decode($file);
      $ticket_data = [['assistance'=>$req->assistance, 'informations'=>$req->informations, 'documents'=>$req->documents, 'contacts'=>$req->contacts, 'files'=>$req->files, 'replier'=>'client']];
      $json[] = $ticket_data;
      file_put_contents($file_path, json_encode($json));
      $mail = 'support@ndedges.com';
      Mail::to($mail)->send(new notification('Support ticket with ticket id '.$id.' updated'));
      return 'ticket updated successfully';
    }
}
