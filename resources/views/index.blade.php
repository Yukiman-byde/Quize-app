@extends('layout')


@section('content')
        <h1>ニュース一覧</h1>

        @foreach ( $displays as $display )
            <p>
                {{ $display->name }},
                {{ $display->description }}
            </p>
        @endforeach
@endsection
