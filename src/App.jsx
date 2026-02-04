import React from 'react'
import Card from './components/Card'


const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://www.bing.com/th/id/OIP.AfKMLf4rKX7EqOSAVpujIQHaEK?w=274&h=211&c=8&rs=1&qlt=90&o=6&cb=defcachec1&dpr=1.3&pid=3.1&rm=2",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHourUSD: 45,
    location: "Mumbai, India"
  },
  {
    brandLogo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIANMBCQMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAABQYEAgMB/9oACAEBAAAAANKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+PJRAAAAAk5WtqgAAAAfHC+dlQAAAABHy+ltgAAAHBF+dGlzSufoudgAAARMwAfuz7gAAD4YbyAWdSAAAIeZAPW99gAADNQgDs2wAAAZuCAfXegAABFy4A1NkAAAc+FAHrS2wAABjpwAt6cAAAcGMAPW46AAAAzkABp7YAAAGemd9P8l8Vi4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAoCAhADEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQEAAAAUBAAAAFAQAAABQBAAAAFBAAAAAAAAAAAAAAAAAAAAAAAAA/8QAOBAAAgECAgYFCAsAAAAAAAAAAQIDBAUAESEwMTNAUhQiI1FhEhMyQUJwcaEQFUNQU3JzgYOTsv/aAAgBAQABPwD3eT1MFOM5pQuKe6QVM4hRH2E5n7guVx6L2UW+/wAYd2di7sWY7ScWRCat35I+PqZhTwSzH2Bh3aR2dzmzHMn6LbSGlpgG3j6X4++NlRp4y4jR5WCxoXbuUZ4t1r8wRNPvPUvLxlXcaalzUkvJyLiS91TegiJhbzXA6SjfFcQXuI6J4yniuBPR1CbyJ1xJc6CnGSHy/CPEt8qG3SImPre4/j/IYivlQu9RHxS11PVjqNk/IeIulxMPYQnr+22qVmRgysQQcwRoIxb6mSqp1d0Ib5Nw1TMKenlmPsjDMzszMc2JJJ1Vrt4qO3mHZDYvNw99kyhgj5nJ1SoXZUXazBR++Io1ijSNPRUADh77voPyaq36a6k/VHEX5e0p270Oqhk8zNFLyOGxt0jh75HnTRPyPq7RWiWIQOe0QaPFeHq4ekU00XrKaPiNWrMjBlYhgcwRihuwmKQzJ2h0Bhw90p+j1b8j9ddXZKfy5nnOxNA4e40nS6cgbxNKapEeR1RBmzHIDFLTrSwJEPVtPeeIu9DkTVRfyjU2mgMI6RKMnYdUdw4kjMYrLMcy9L/XgW2vJy6M2ILG50zygeCYS00C/Y5/E4e0UL7IynipxPZJ03LhxgWyvzy6OcUNoETCWchnGxfe1//EABQRAQAAAAAAAAAAAAAAAAAAAHD/2gAIAQIBAT8Abv/EABQRAQAAAAAAAAAAAAAAAAAAAHD/2gAIAQMBAT8Abv/Z",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHourUSD: 70,
    location: "California, USA"
  },
  {
    brandLogo: "https://www.bing.com/th/id/OIP.dLl9UyA6y1GTydI-npnoygHaHv?w=163&h=211&c=8&rs=1&qlt=90&o=6&cb=defcachec1&dpr=1.3&pid=3.1&rm=2",
    companyName: "Amazon",
    datePosted: "10 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    payPerHourUSD: 55,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.MDp--BpyS2Z85Djo7NAm8QHaEK?w=200&h=200&c=10&o=6&cb=defcachec1&dpr=1.3&pid=genserp&rm=2",
    companyName: "Meta",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Contract",
    tag2: "Senior Level",
    payPerHourUSD: 65,
    location: "London, UK"
  },
  {
    brandLogo: "https://www.bing.com/th/id/OIP.-X3126Od2J9BYywAzkAN0QHaD5?w=240&h=211&c=8&rs=1&qlt=90&o=6&cb=defcachec1&dpr=1.3&pid=3.1&rm=2",
    companyName: "Netflix",
    datePosted: "1 week ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHourUSD: 75,
    location: "Los Angeles, USA"
  },
  {
    brandLogo: "https://www.bing.com/th/id/OIP.7IgX6OczyQrC3djWBE8xnwHaHa?w=176&h=211&c=8&rs=1&qlt=90&o=6&cb=defcachec1&dpr=1.3&pid=3.1&rm=2",
    companyName: "Microsoft",
    datePosted: "6 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    payPerHourUSD: 60,
    location: "Toronto, Canada"
  },
  {
    brandLogo: "https://www.bing.com/th/id/OIP.m1ar389tpEOAFN1NTurqvwHaHa?w=216&h=211&c=8&rs=1&qlt=90&o=6&cb=defcachec1&dpr=1.3&pid=3.1&rm=2",
    companyName: "Tesla",
    datePosted: "4 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHourUSD: 50,
    location: "Austin, USA"
  },
  {
    brandLogo: "https://www.bing.com/th/id/OIP.ZHfkJm52IVVfUeK4f-RnIgHaHa?w=176&h=211&c=8&rs=1&qlt=90&o=6&cb=defcachec1&dpr=1.3&pid=3.1&rm=2",
    companyName: "NVIDIA",
    datePosted: "8 days ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHourUSD: 80,
    location: "Seattle, USA"
  },
  {
    brandLogo: "https://www.bing.com/th/id/OIP.65OgnR2TgM68qELFogU0OQHaHa?w=201&h=211&c=8&rs=1&qlt=90&o=6&cb=defcachec1&dpr=1.3&pid=3.1&rm=2",
    companyName: "Adobe",
    datePosted: "12 days ago",
    post: "Frontend Engineer",
    tag1: "Part Time",
    tag2: "Mid Level",
    payPerHourUSD: 48,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://www.bing.com/th/id/OIP.jNy5QTzPKI3BJewZ_2OStQHaEK?w=293&h=211&c=8&rs=1&qlt=90&o=6&cb=defcachec1&dpr=1.3&pid=3.1&rm=2",
    companyName: "Salesforce",
    datePosted: "9 days ago",
    post: "Cloud Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHourUSD: 68,
    location: "Dublin, Ireland"
  }
];



  return (
    <div className="parent">
      {jobOpenings.map(function(elem, idx){


        return <div key={idx}>
          <Card company = {elem.companyName} brandLogo = {elem.brandLogo} datePosted = {elem.datePosted} post = {elem.post} tag1 = {elem.tag1} tag2 = {elem.tag2} payPerHourUSD = {elem.payPerHourUSD} location = {elem.location}/>
        </div>
         
      })}


    </div>
  ) 
}

export default App