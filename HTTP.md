# HTTP -- the way angular connects to the backend.

# ANATOMY of a http Request: --

      * URL (API Endpoint) -- /posts/1

      * http Verb -- POST, GEt, PUT, ---

      * Headers (Metadata) -- { "Content-Type": "application/json" }

      * Body (POST, PUT, PATCH) -- { title: "New Post" }


# different Ways
<!-- set Headers to REQUEST-headers -->
      *HEADERS: HttpHeaders({})

<!-- Set QueryParams to Request-headers ?... -->
      *params: HttpParams({})

<!-- Gives the Full Response i.e headers, body, status.... -->
      *observe: 'response'

 <!-- this is For the BODY  -->
      *