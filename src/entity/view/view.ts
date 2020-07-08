import {ViewEntity, ViewColumn} from "typeorm";

@ViewEntity({ 
    expression: `
    SELECT profile.id, profile.gender, profile.photo as categoryName, user_profile.name
    FROM     profile INNER JOIN user_profile  ON profile.id = user_profile.profileId
    `
})
export class PostCategory2 {

    @ViewColumn()
    id: number;

    @ViewColumn()
    name: string;

    @ViewColumn()
    categoryName: string;

}