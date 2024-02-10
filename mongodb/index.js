import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient, ServerApiVersion,ObjectId } from 'mongodb'


const app = express();
const PORT = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})
const db = client.db('mehreen')
const usersCollection = db.collection('users')
  

app.get('/', (req, res) => {
    res.render('pages/index')
  })

  app.post('/', async (req, res) => {
    try {
      await client.connect()
      const document = {
        Firstname: req.body.Firstname,
        Lastname: req.body.Lastname,
        email: req.body.email,
        password: req.body.password,
      }
  
      await usersCollection.insertOne(document)
      console.log('Document inserted')
      res.redirect('/main')
    } catch (error) {
      console.error('Error:', error);
      res.send('Error occurred while saving data.');
    } finally {
      await client.close();
    }
  })
  app.get('/main', async (req, res) => {
    try {
      await client.connect()
  
      const userData = await usersCollection.find({}).toArray();
      res.render('pages/main', { userData });
    } catch (error) {
      console.error('Error:', error);
      res.send('Error occurred while fetching data.');
    } finally {
      await client.close();
    }
  })
  app.get('/edit/:id', async (req, res) => {
    try {
      await client.connect()
      const userId = req.params.id
      const user = await usersCollection.findOne({ _id:new ObjectId(userId) })
      res.render('pages/edit', {user});
    } catch (error) {
      console.error('Error:', error);
      res.send('Error occurred while fetching user data for editing.');
    } finally {
      await client.close();
    }
  })
  app.post('/edit/:id', async (req, res) => {
    try {
      await client.connect()
      const userId = req.params.id
      const updatedUser = {
        Firstname: req.body.Firstname,
        Lastname: req.body.Lastname,
        email: req.body.email,
        password: req.body.password,
      };
  
     await usersCollection.updateOne({ _id: new ObjectId(userId) }, { $set: updatedUser });
        console.log("updated")
        res.redirect('/main');
    } catch (error) {
      console.error('Error:', error);
      res.send('Error occurred while updating user data.');
    } finally {
      await client.close();
    }
  })
  app.get('/delete/:id', async (req, res) => {
    try {
      await client.connect()
      const userId = req.params.id
      const user =await usersCollection.findOne({ _id:new ObjectId(userId) })
      
      res.render('pages/delete', {user});
    } catch (error) {
      console.error('Error:', error);
      res.send('Error occurred while fetching user data for editing.');
    } finally {
      await client.close();
    }
  })
  app.post('/delete/:id', async (req, res) => {
    try {
      await client.connect()
      const userId = req.params.id
      await usersCollection.deleteOne({ _id: new ObjectId(userId) })
      console.log('Document deleted')
      res.redirect('/main');
    } catch (error) {
      console.error('Error:', error);
      res.send('Error occurred while deleting user data.');
    } finally {
      await client.close();
    } 
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
