import React from "react";
import { Link, useRouteError } from "react-router-dom";
export default function CareerErrors()
{   const error = useRouteError();
    return(<div>CareersError
        <p>{error.message}</p>
        <Link to ="/">Back to the Homepage </Link>
    </div>)
}