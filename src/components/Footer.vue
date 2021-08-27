<template>
    <section class = "footer">
            <a href="contact" class = "contact">Contact</a>
            <a href="Team" class = "team">Team</a>
            <a href="privacy" class = "privacy">Privacy</a>
            <a href="privacy" class = "privacy1">Privacy</a>
            <p>Disclaimer: Information on this page does not constitute financial advice, and is shared for interest only.</p>
    </section>
</template>

<style>
.footer{
    padding: 25px;
    display: grid;
    grid-template-columns: repeat(20, 1fr);
    grid-template-rows: repeat(5, 1fr);
    column-gap: 25px;
    height: 20vh;
    background-color: #120040;
    font-size: 18px;
    letter-spacing: 2px;
    text-transform: uppercase;
}
.footer p{
    grid-column: 6 /17;
    grid-row: 5;
    color:rgb(211, 211, 211);
    font-size: 14px;
    text-transform:none;
}

.contact{
    grid-row: 3;
    color:white;
}
.team{
    color:white;
    grid-row: 3;
}
.privacy{
    color:white;
    grid-row: 3;
    grid-column: 19;
}
.privacy1{
    color:white;
    grid-row: 3;
    grid-column: 20;
}

@media (max-width: 830px) {
  .footer p{
      grid-row: 4;
      grid-column: 1 / 6;
      text-align: center;
  }
  .privacy{
    
    grid-row: 3;
    grid-column: 4;
}
  .privacy1{
    
    grid-row: 3;
    grid-column: 5;
}
}
</style>