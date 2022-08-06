<?php

namespace App\Http\Controllers;

use App\Models\Country;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class CountryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index()
    {
        // return response()->json(['message' => 'GOod!']);
        $countries = Country::all();
        return response()->json($countries);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {        
        
        $request->validate([
            'country_name' => ['required'],
            'country_abbr' => ['required', 'max:4', 'min:2'],
            'currency' => ['required', 'min:2', 'max:3'],
            'country_logo' => ['required']
        ]);

        $country = new Country;
        $country->country = $request->country_name;
        $country->country_currency = $request->currency;
        $country->country_abbreviate = $request->country_abbr;
        $country->currency_symbol = (isset($request->currency_symbol)) ? $request->currency_symbol : '';

        if($request->country_logo) {
            $image = $request->country_logo;
            $image_new_name = time().$image->getClientOriginalName();
            $country->country_logo = $image_new_name;
            $image->move('countries/', $image_new_name);
        }
        $country->save();

        return response()->json(['message' => 'A new Country has been added successfully!']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Country::find($id);
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
    public function update(Request $request, $id)
    {
        //
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
