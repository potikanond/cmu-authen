# CMX Authentication Scripts

In this project, there are two parts of authentication processes for Linux machine.

## Step 1: Authentication
 
Make sure that you have `execute` permission on the `cmu-authen.sh` script.

```bash
chmod +x cmu-authen.sh
```

Execute the bash script to get authentication `token`.

```bash
./cmu-authen.sh
```

You will get a result similar to this:

```json
{
	"current_session": {
		"username":"<your_cmu_email_account>",
		"secret":"<your_authentication_token>"
	},
	"all_session": [
		{
			"username":"<your_cmu_email_account>",
			"ip":"<your_current_ip_address>",
			"createat":"2024-09-18T09:13:29.000Z",
			"expire":"2024-09-18T09:43:29.000Z",
			"secret":"<your_authentication_token>"
		}
	]
}
```

After the authentication, you should be able to access the Internet. You can download files or install packages as you want. 

**Your internet session will last about 25 minutes.** After the session expires, you can rerun the script to get access to the Internet again.


------------------------------

## Step 2: Auto-refresh your internet session (Optional) 

This `Javascript project` is developed by the `university IT staff`. It is a script for refreshing your internet session automatically using the `token` you received from `Step 1`. 

You need to install `Node.js` in order to run this script. [See details here] (https://github.com/nodesource/distributions/blob/master/README.md)

Before executing the program this first time. Install necessary Javascript packages by running the following command inside this folder.

```bash
npm install 
```

To run the script, use the following command.

```bash
npm run start
```

The JavaScript program will ask you to enter `<your_cmu_email_account>` and `<your_authentication_token>` from previous step. 

```bash
Enter CMU Email address or Guest Account : <your_cmu_email_account>
Enter authentication token from login.cmu.ac.th : <your_authentication_token>
```


