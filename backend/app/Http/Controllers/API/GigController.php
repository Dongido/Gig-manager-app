<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Models\Gig;
use Validator;
use App\Http\Resources\GigResource;

class GigController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $gigs = Gig::with('company')->all();
    
        return $this->sendResponse(GigResource::collection($gigs), 'Gigs retrieved successfully.');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->all();
   
        $validator = Validator::make($input, [
            'company_id' => 'required',
            'role_id' => 'required',
            'country' => 'required',
            'state' => 'required',
            'address' => 'required',
            'tags' => 'nullable|string',
            'minimum_salary' => 'required',
            'maximum_salary' => 'required'
        ]);
   
        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
        }
   
        $gig = Gig::create($input);
   
        return $this->sendResponse(new GigResource($gig), 'Gig created successfully.');
    } 

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $gig = Gig::find($id);
  
        if (is_null($gig)) {
            return $this->sendError('Gig not found.');
        }
   
        return $this->sendResponse(new GigResource($gig), 'Gig retrieved successfully.');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Gig $gig)
    {
        $input = $request->all();
   
        $validator = Validator::make($input, [
            'company_id' => 'required',
            'role_id' => 'required',
            'country' => 'required',
            'state' => 'required',
            'address' => 'required',
            'tags' => 'nullable|string',
            'minimum_salary' => 'required',
            'maximum_salary' => 'required'
        ]);
   
        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
        }
   
        $gig->company_id = $input['company_id'];
        $gig->role_id = $input['role_id'];
        $gig->country = $input['country'];
        $gig->state = $input['state'];
        $gig->address = $input['address'];
        $gig->tags = $input['tags'];
        $gig->minimum_salary = $input['minimum_salary'];
        $gig->maximum_salary = $input['maximum_salary'];
        $gig->save();
   
        return $this->sendResponse(new GigResource($gig), 'Gig updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Gig $gig)
    {
        $gig->delete();
   
        return $this->sendResponse([], 'Gig deleted successfully.');
    }
}
