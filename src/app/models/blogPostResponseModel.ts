import { BlogPost } from "./blogPost";
import { ResponseModel } from "./responseModel";

export interface BlogPostResponseModel extends ResponseModel{
    data:BlogPost[]
}