import InputWithSave from "../components/InputWithSave";
import { Outlet } from "react-router";

export default function ExternalPage() {

    return (
        <div className="content">
            <p>ExternalPage</p>
      <div>
        <Outlet/>
        </div>
        
        </div>
    )
}