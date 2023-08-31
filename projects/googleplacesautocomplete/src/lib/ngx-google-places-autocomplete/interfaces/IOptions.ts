export interface IOptions{
    fields:Array<string> | ['ALL'];
    types:Array<any>
}
export interface IBounds{
    east:number
    west:number
    north:number
    south:number
}