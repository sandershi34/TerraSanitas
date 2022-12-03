const { MongoClient, ServerApiVersion } = require('mongodb');
const { cursorTo } = require('readline');
const uri = "mongodb+srv://sandershi:Ss214350894@cluster0.sr3lhpi.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri) //{ useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    //const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/sample_airbnb?retryWrites=true&w=majority";


    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect(async() => {
            cursor = await client.db("mongotutorial").collection("examples").find({})
            await cursor.forEach(doc => console.log(doc));


        });

        // Make the appropriate DB calls
        //await  listDatabases(client);
    
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);