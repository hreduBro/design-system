import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HrUi } from './hr-ui';

describe('HrUi', () => {
    let component: HrUi;
    let fixture: ComponentFixture<HrUi>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HrUi]
        }).compileComponents();

        fixture = TestBed.createComponent(HrUi);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
