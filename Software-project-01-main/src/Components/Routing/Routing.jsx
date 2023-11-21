import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Home from '../Home/Home';

import SchedulePlan from '../SchedulePlan/SchedulePlan';
import Speakersdetails from '../Speakersdetails/Speakersdetails';
import Details from '../Details/Details';
import Schedule from '../Schedule/Schedule';
import SchedulePlandetails from '../SchedulePlandetails/SchedulePlandetails';
import Contactus from '../Contactus/Contactus';
import Blog from '../Blog/Blog';
import Sponser from '../Sponser/Sponser';
import Ticket from '../Ticket/Ticket';
import Login from '../Login/Login';
import Registation from '../Registation/Registation';

const createrouting =createBrowserRouter([
                        {
                            path:"/",
                            element:<MainLayout></MainLayout>,
                            children:[
                                {
                                    path:"/",
                                    element:<Home></Home>,
                                    loader:()=> fetch('/sperkers.json')
                                

                                },
                                {
                                    path:"/speakersdetails",
                                    element:<Speakersdetails></Speakersdetails>,
                                    
                                },
                                {
                                    path:"/SchedulePlan",
                                    element:<SchedulePlan></SchedulePlan>
                                },
                                {
                                    path:"speakersDetails/:id",
                                    element:<Details></Details>,
                                    loader:()=>fetch('/sperkers.json')
                                },
                                {
                                    path:"/schedule",
                                    element:<Schedule></Schedule>
                                },
                                {
                                    path:"/SchedulePlan/:id",
                                    element:<SchedulePlandetails></SchedulePlandetails>,
                                    loader:()=>fetch('sperkers.json')
                                },
                                {
                                
                                path:"/contactus",
                                element:<Contactus></Contactus>

                                },
                                {
                                    path:"/blog",
                                    element:<Blog></Blog>,
                                    // loader:()=>fetch('Blog.json')
                                },
                                {
                                    path:"/Sponser",
                                    element:<Sponser></Sponser>
                                },
                                {
                                    path:"ticket",
                                    element:<Ticket></Ticket>
                                },
                                {
                                    path:"/login",
                                    element:<Login></Login>
                                },
                                {
                                    path:"/registation",
                                    element:<Registation></Registation>
                                }
                            ]
                        }
])

export default createrouting;