import { Component } from '@angular/core';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.scss']
})
export class ViewsComponent {
  sidenavList = [
    { title: 'Navigation Items', icon: 'navigation', route: '/views/navigation-items' },
    { title: 'Forms With Validation', icon: 'view_compact', route:'/views/forms-validation' },
    {title: 'UI Components', icon: 'build', route: '/views/ui-components'},
    {title: 'Animation Css', icon: 'slow_motion_video', route:'/views/animation-css'},
    {title: 'Authentication', icon: 'input', route: '/views/authentication'},
    {title: 'Api Integration', icon:'room_service', route: '/views/api-integration'},
    {title: 'Pubnub', icon:'chat', route: '/views/pubnub'},
    {title: 'Stripe Payment', icon:'payment', route: '/views/stripe-payment'}
  ];
}
