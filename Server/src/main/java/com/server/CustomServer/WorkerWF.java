package com.server.CustomServer;

import java.io.IOException;
import java.nio.ByteBuffer;
import java.nio.channels.SelectionKey;
import java.nio.channels.SocketChannel;
import com.server.ServerState.ServerState;

// WorkerWF class
public class WorkerWF implements Runnable
{
    private SelectionKey key;
    private int idClient = -1;
    private int clientOp;
    private ServerState serverState;

    // Constructor I
    public WorkerWF(SelectionKey key, int idClient, int clientOp)
    {
        this.key = key;
        this.idClient = idClient;
        this.clientOp = clientOp;
        this.serverState = ServerState.getInstance();
    }

    // Constructor II
    public WorkerWF(SelectionKey key, int clientOp)
    {
        this.key = key;
        this.clientOp = clientOp;
        this.serverState = ServerState.getInstance();
    }

    // run method
    @Override public void run()
    {
        try {
            if (clientOp == ClientOperation.NEW_APP) {
                newApp();
                sendMessage();
            }
            else {
                newReport_endApp(clientOp);
                sendMessage();
            }
        }
        catch (IOException e) {
            registerKeyToSelector();
            return;
        }

    }

    // newApp method
    private void newApp() throws IOException
    {
        SocketChannel client = (SocketChannel) key.channel();
        ByteBuffer buffer = ByteBuffer.allocate(4);
        String remoteAddress = client.getRemoteAddress().toString();
        remoteAddress = remoteAddress.substring(1,remoteAddress.indexOf(":"));
        client.read(buffer);
        buffer.flip();
        int len = buffer.getInt();
        buffer = ByteBuffer.allocate(len);
        byte[] payload = new byte[len];
        int read=0, len_read=0;
        while (len-len_read>0) {
            read=client.read(buffer);
            len_read+=read;
        }
        buffer.flip();
        buffer.get(payload);
        String strPayload = new String(payload,0,len);
        serverState.addApplication(idClient,strPayload, remoteAddress);

    }

    // newReport_endApp method
    private void newReport_endApp(int clientOp) throws IOException
    {
        SocketChannel client = (SocketChannel) key.channel();
        ByteBuffer buffer = ByteBuffer.allocate(8);
        client.read(buffer);
        buffer.flip();
        idClient = buffer.getInt();
        int len = buffer.getInt();
        buffer = ByteBuffer.allocate(len);
        byte[] payload = new byte[len];
        int read=0, len_read=0;
        while (len-len_read>0) {
            read=client.read(buffer);
            len_read+=read;
        }
        buffer.flip();
        buffer.get(payload);
        String strPayload = new String(payload,0,len);
        if(clientOp == ClientOperation.NEW_REPORT) {
            serverState.addNewReport(idClient,strPayload);
        }
        else {
            serverState.endApplication(idClient, strPayload);
        }
    }

    // sendMessage method
    private void sendMessage()
    {
        KeyAttach keyAttach = (KeyAttach) key.attachment();
        ByteBuffer buffer = ByteBuffer.allocate(8);
        buffer.putInt(0);
        buffer.putInt(idClient);
        keyAttach.response = buffer;
        keyAttach.clientOp = clientOp;
        keyAttach.idClient = idClient;
        registerKeyToSelector(keyAttach);
    }

    // registerKeyToSelector method
    private void registerKeyToSelector()
    {
        this.key.interestOps(SelectionKey.OP_READ);
    }

    // registerKeyToSelector method
    private void registerKeyToSelector(KeyAttach keyAttach)
    {
        this.key.attach(keyAttach);
        this.key.interestOps(SelectionKey.OP_WRITE);
    }
}
