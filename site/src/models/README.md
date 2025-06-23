## Models

These don't really need to all be their own files in this example, as they're tiny and have no side effects, but starting out with
this separation makes it easy to grow everything later in a clean fashion.

Sharing the models between the front end and back end is also made fairly easy this way.  While I'm not doing it in the example code
you could define a single model file that contains public/private elements and only expose some parts to the UI.