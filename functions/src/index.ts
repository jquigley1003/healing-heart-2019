import * as admin from "firebase-admin";

export {registerUser, setUserRoles, addAdmin, removeAdmin, deleteUser,
} from "./user";

export {getNewsletters} from "./mailchimp";

admin.initializeApp();
