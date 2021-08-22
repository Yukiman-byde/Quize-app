@extends('layout')

@section('content')
    <div>質問の正解数は{{ $quize }}です</div>
  
  
  <a href="{{ route('display.index')}}">Go back to home</a>

@endsection