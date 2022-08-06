<?php

namespace App\Http\Controllers;

use App\Models\Casino;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CasinoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */


    public function assignedCasinos() {
        // $assignedCasinos = Casino::with('countries,')
    }

    public function latestCasinos() {
        $casinos = Casino::orderBy('created_at', 'desc')->take(6)->get();
        return response()->json($casinos);
    }

    public function index($limit = false)
    {
        // $casinos = Casino::with('countries')->get();
        $casinos = ($limit) ? Casino::with('countries')->inRandomOrder()->limit($limit)->get() : Casino::with('countries')->get();
        // return "Wait..";
        return response()->json($casinos);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        // return response()->json(['feedback' => 'successful']);
        /* */
        $request->validate([
            'name' => 'required',
            'link' => 'required',
            'bonus' => 'required',
            'description' => 'required'
        ]);
        /* */

        $casino = new Casino;
        $casino->name = $request->name;
        $casino->bonus = $request->bonus;
        $casino->affiliate_link = $request->link;
        $casino->description = (isset($request->description)) ? $request->description : '';

        // if($request->get('image'))
        // {
            // //    \Image::make($request->get('image'))->save(public_path('images/').$name);
            //     // return response()->json(['feedback' => $name]);
            //  }


            if($request->get('image')) {
                $image = $request->get('image');
                // $image_new_name = time().$image->getClientOriginalName();
                $image_new_name = time().'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
                $casino->logo = $image_new_name;
                // $image->move('casinos/', $image_new_name);
                \Image::make($request->get('image'))->save(public_path('casinos/').$image_new_name);
            }
            $casino->save();

        }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Casino::find($id);
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

        // return response()->json([
        //     'test' => $request->name
        // ]);

        $casino = Casino::find($id);
        // $casino->update($request->all());
        $casino->name = $request->name;
        $casino->bonus = $request->bonus;
        $casino->affiliate_link = $request->link;

        if($request->image && $request->image != $casino->image) {
            $image = $request->get('image');
            // $image_new_name = time().$image->getClientOriginalName();
            $image_new_name = time().'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
            // return response()->json([$image_new_name]);
            $image->move('casinos/', $image_new_name);
            $casino->logo = $image_new_name;
        }

        $casino->save();

        return response()->json([
            'casinos' => 'success'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $casino = Casino::find($id);
        $casino->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Casino removed successfully!'
        ]);
    }
}
