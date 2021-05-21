package com.server.SpringServer;

import com.server.ServerState.ServerState;
import com.server.ServerState.ApplicationWF;
import org.springframework.web.bind.annotation.*;
import com.server.ServerState.SpringRequest.GeneralInformations;

// RequestController class
@RestController
public class RequestController
{
    ServerState serverState = ServerState.getInstance();

//    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/general")
    public GeneralInformations general(){
        return serverState.getGeneralInformations();
    }

//    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/get_all_app")
    public ApplicationWF getApplication(@RequestParam("id") Integer idApp)
    {
        return  serverState.getApp(idApp);
    }

//    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/get_historical_data")
    public String getHistoricalData(@RequestParam("idApp") String idApp, @RequestParam("idOperator") String idOperator)
    {
        return  serverState.getStatOperator(idApp,idOperator);
    }
}
