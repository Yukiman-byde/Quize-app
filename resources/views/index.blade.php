@extends('layout')


@section('content')
        <h1>ニュース一覧</h1>

        @foreach ( $displays as $display )
            <p>
                {{ $display->name }},
                {{ $display->description }}
               <img src="{{ $display->thumbnail}}">
               
                カテゴリー：{{ $display->category->name }}
            </p>
        @endforeach
@endsection
