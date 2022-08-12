<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class GigResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'company_id' => $this->company_id,
            'company_name'=>$this->company->name,
            'role_id' => $this->role_id,
            'role_name' => $this->role->name,
            'country' => $this->country,
            'state' => $this->state,
            'address' => $this->address,
            'tags' => $this->tags,
            'minimum_salary' => $this->minimum_salary,
            'maximum_salary' => $this->maximum_salary,
            'created_at' => $this->created_at->format('d/m/Y'),
            'updated_at' => $this->updated_at->format('d/m/Y'),
        ];

        //return parent::toArray($request);
    }
}
