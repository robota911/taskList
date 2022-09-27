import { TestBed } from '@angular/core/testing';

import { ChatMesageService } from './chat-mesage.service';

describe('ChatMesageService', () => {
  let service: ChatMesageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatMesageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
