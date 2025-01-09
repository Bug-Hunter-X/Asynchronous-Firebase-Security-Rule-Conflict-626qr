The solution involves correctly configuring Firebase security rules to allow both reads and writes under the specified conditions.  This will prevent the asynchronous conflict.

Here's how you might modify the security rules to solve this issue:

```json
{
  "rules": {
    "myData": {
      '.read': true,
      '.write': true 
    }
  }
}
```

This rule grants both read and write access to the '/myData' location.  You can customize this rule based on your specific security requirements.  Remember to replace the basic `.read` and `.write` with more specific and fine-grained rules that adhere to the principle of least privilege.  Consider using authentication to further restrict access as well.

Remember to deploy these modified rules to your Firebase project after making these changes.