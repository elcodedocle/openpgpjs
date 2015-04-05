openpgpjs by [hanewin][1] (packaged by elcodedocle)
==================================================
#####*A GnuPG compatible PGP (RSA/AES) Javascript encryption library*

 Copyright (C) 2005 Herbert Hanewinkel, [www.haneWIN.de][2]<br/>
 License: [MIT Expat][3]<br />
 
### How to use

```
<script type="text/javascript" src="path/to/aes-enc.js"></script>
<script type="text/javascript" src="path/to/base64.js"></script>
<script type="text/javascript" src="path/to/rsa.js"></script>
<script type="text/javascript" src="path/to/PGencode.js"></script>
<script type="text/javascript">
  doEncrypt(keyId, keyType, publicKey, text);
</script>
```

(More info at http://www.hanewin.net/encrypt/PGencode.htm)


### Motivation

For obsolete reasons, I wanted to implement client side Javascript asymmetric encryption on my PHP web app. 

So I did some research and the most reasonably fast and tested library was PGEncrypt by Herbert Hanewinkel, but it was old (2005) and lacked a public repository or a reliable distribution channel compatible with composer for quickly embedding on PHP web apps and tracking any changes/updates/patches or extensions, so I packaged it all and this project was born.

### Acks

Herbert Hanewinkel, author of the original library at http://www.haneWIN.de/


Enjoy!

[1]: http://www.hanewin.net/encrypt/PGencode.htm
[2]: http://www.haneWIN.de
[3]: https://raw.githubusercontent.com/elcodedocle/openpgpjs/master/LICENSE
