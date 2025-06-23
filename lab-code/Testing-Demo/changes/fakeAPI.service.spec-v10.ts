
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FakeAPIService } from './fakeAPI.service';
import { Post } from './post';


describe('FakeAPIService ', () => {
    let httpClient: HttpClient;
    let fakeAPIService: FakeAPIService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            // Import the HttpClientModule necessary for HttpClient
            imports: [HttpClientModule],
            // Explicitly provide the service-under-test 
            providers: [
                FakeAPIService,
            ]
        });

        // Inject httpClient as well as FakeAPIService
        // into the TestBed
        httpClient = TestBed.inject(HttpClient);
        fakeAPIService = TestBed.inject(FakeAPIService);

    });

    // Need to incorporate the DoneFn
    it('should return the expected response from the actual fake API service', (done: DoneFn) => {

        let postId = 5;

        // The expected response from sending a GET request to
        // https://jsonplaceholder.typicode.com/posts/5
        let expectedResponse: Post = {
            "userId": 1,
            "id": postId,
            "title": "nesciunt quas odio",
            "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
        }
        
        // Make the call and subscribe the observable returned 
        // from it        
        fakeAPIService.getSinglePost(postId).subscribe(value => {
            expect(value).toEqual(expectedResponse);
            // Remember to call done() to ensure test completes properly
            done();
        });
    });

});



