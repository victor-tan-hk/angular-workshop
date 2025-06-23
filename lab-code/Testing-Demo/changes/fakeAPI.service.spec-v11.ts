import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { FakeAPIService } from './fakeAPI.service';
import { Post } from './post';


describe('FakeAPIService ', () => {

    // This is the mock for HttpClient
    let httpTestingController: HttpTestingController;
    let fakeAPIService: FakeAPIService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            // Import the module necessary for HttpClient mocking
            imports: [HttpClientTestingModule],
            // Provide the service-under-test 
            providers: [
                FakeAPIService,
            ]
        });

        httpTestingController = TestBed.inject(HttpTestingController);        
        fakeAPIService = TestBed.inject(FakeAPIService);

    });


      it('should return a single post correctly', () => {

        // construct a dummy URL
        let postId = 1; // 
        let baseURL: string = "https://jsonplaceholder.typicode.com/";
        let finalUrl = baseURL + 'posts/' + postId;

        // construct a random Post object
        let dummyPost: Post = new Post(10, postId, "Angular coolness","Angular is a great framework");


        // When fakeAPIService makes the actual call to HttpClient
        // the call will be passed onto the httpTestingController
        // mock
        fakeAPIService.getSinglePost(postId).subscribe({
          
          next: returnedPost => expect(returnedPost).toEqual(dummyPost),
          error: fail,

        });
  
        // Use the httpTestingController to verify:
        // 1. fakeAPI service should have made one request to the  dummy URL
        // 2. This request for a HTTP GET
        const req = httpTestingController.expectOne(finalUrl);
        expect(req.request.method).toEqual('GET');
  
        // Use  httpTestingController to return a dummy response
        // in place of HttpClient
        req.flush(dummyPost);

        // Finally, assert that there are no outstanding requests.
        httpTestingController.verify();

      });      

});