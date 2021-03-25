@app
begin-blog

@static
folder public
fingerprint true

@http
get /
get /posts/:title
get /*

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
