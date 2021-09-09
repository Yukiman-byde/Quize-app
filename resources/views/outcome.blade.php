@extends('layout')

@section('content')

  
   @foreach($requests as $request)
    <p>{{$request}}</p>
    @endforeach
    
  @foreach($displays as $display)
    <p>{{$display->answear}}</p>
    @endforeach
  

@endsection