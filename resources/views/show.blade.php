@extends('layout')

@section('content')
    <h1>{{ $display->name }}</h1>
    <p>
      <img src="{{ $display->thumbnail }}" style="width:500px"><br>
      {{ $display->description }}
    </p>
     <div>
        <p>Genre:{{ $display->category->name }}</p>
        <br>
        <button><a href="{{ route('display.quize', ['id' => $display->id])}}">Are you ready?</a></button>
    </div>
    <div>
        <a href="{{ route('display.index') }}">Back to Home</a>
    </div>
       <div id="app"></div>
@endsection