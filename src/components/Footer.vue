<template>
    <footer>
        <section>
        <div class="frame-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2079.5262692794813!2d16.181479616381278!3d58.5866657814051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46593bb48c6d0e33%3A0x231d9cc7379c1c3b!2sSankt%20Persgatan%2C%20Norrk%C3%B6ping!5e0!3m2!1ssv!2sse!4v1594632284933!5m2!1ssv!2sse"  frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
        <div class="opening">
            <h1>Opening hours</h1>
            <table>
                <tbody>
                    <tr v-for="hour in hours" :key="hour.day">
                        <td>{{hour.day}}</td>
                        <td>{{hour.time}}</td>
                    </tr>
                </tbody>
            </table>
            <p>Tel: 070-0707070 <br> Adessgatan 21, 584 633 Adress.</p>
            <span class="socials"><i class="fab fa-instagram"></i><i class="fab fa-facebook-square"></i></span>
        </div>
        </section>
        <div>
            <p>Copyright &copy; {{year}} | Website developed with <span id="heart"> &hearts;</span> by <a href="https://alice-ang.github.io/">Alice Anglesjö</a></p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    data(){
        return {
            year: '',
            hours: [
                {
                    day: 'Monday',
                    time: '11:00 - 20:00'
                },
                {
                    day: 'Tuesday',
                    time: '11:00 - 20:00'
                },
                {
                    day: 'Wednesday',
                    time: '11:00 - 20:00'
                },
                {
                    day: 'Thursday',
                    time: '11:00 - 20:00'
                },
                {
                    day: 'Friday',
                    time: '11:00 - 20:00'
                },
                {
                    day: 'Saturday',
                    time: '12:00 - 18:00'
                },                
                {
                    day: 'Sunday',
                    time: 'Closed'
                },                
            ]
        }
    },
    created() {
        this.year = new Date().getFullYear()
    }
}

</script>

<style scoped>
footer {
    display: flex;
    flex-direction: column;
    margin-top: 1em;
}
.socials {
    display: flex;
    width: 100%;
    justify-content: center;
}
.socials i {
    margin: .5em;
    font-size: 1.5em;
}
section {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
}
.frame-container {
   position: relative;
  overflow: hidden;
  width: 100%;
}
iframe {
position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
.opening{
   display: flex;
    align-items: center;    
    flex-wrap: wrap;
    flex-direction: column;
    padding: 1em 0px;
    width: 100%;
}
#heart {
    color: #ff7799;
}
p {
    text-align: center;
    padding: .5em;
}

a {
    color: black;
    text-decoration: none;
}
i:hover, a:hover {
    cursor: pointer;
    color: #ff7799;

}

@media screen and (min-width: 900px) {
    .frame-container {
        width: 60%;
    }
    .opening {
        width: 40%;
    }
}
</style>