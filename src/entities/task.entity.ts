import { ApiProperty } from "@nestjs/swagger";

export class Task{
    @ApiProperty()
    id:number;

    @ApiProperty()
    title:string;

    @ApiProperty()
    description:string;
    @ApiProperty({enum:['pending ','completed']}
        status:'pending' | 'completed';
    )
}