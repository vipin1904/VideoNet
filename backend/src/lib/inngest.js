import {Inngest} from "inngest";

import { connectDB } from "./db.js";
import User from "../models/User.js";


export const inngest = new Inngest({id:"videoNet"});

const syncUser = inngest.createFunction(
  {id:"sync-user"},
  {event:"clerk/User.created"},
  async({event}) => {
    await connectDB()

    const {id,email_addresses, first_name, last_name,image_url} = event.data

    const newUser = {
      clerkId:id,
      email:email_addresses[0]?.email_addresses,
      name: `${first_name || ""} ${last_name || ""}`,
      profileImage:image_url
    }
    await User.create(newUser)

  }
)

const deleteUserFromDB = inngest.createFunction(
  {id:"delet-user-from-db"},
  {event:"clerk/User.deleted"},
  async({event}) => {
    await connectDB()

    const {} = event.data

  
    await User.create(newUser)
    await User.deleteOne({clerkid: Id});



  }
)
export const functions = [syncUser,deleteUserFromDB]
  
