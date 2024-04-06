      const reGexIP = /\b\d{3}\.\d{3}\.\d{1,3}\.\d{1,3}\b/


      document.querySelector('.btn').addEventListener('click', () => {
        let IPreport = { ip: '', class: '' }


        let IP = document.querySelector('#IP').value;
/* ---------------------- CHECKING IP ADRESS SYNTAX */

        if (reGexIP.test(IP)) {
          IPreport.ip = String(IP)
          let IPparts = IP.split('.')

/* ---------------------- CHECKING IP CLASS VALIDITY */

          console.log(IPparts)
          if (Number(IPparts[0]) < 10 || Number(IPparts[0]) > 255) { alert("Invalid Ip4v Adress") }

          else {
/* ---------------------- CHECKING IP CLASS TYPE */
            switch (true) {
              case Number(IPparts[0]) >= 10 && Number(IPparts[0]) < 127:
                IPreport.class = 'A'
                break;
              case Number(IPparts[0]) >= 127 && Number(IPparts[0]) < 192:
                IPreport.class = 'B'
                break;
              case Number(IPparts[0]) >= 192 && Number(IPparts[0]) < 223:
                IPreport.class = 'C'
                break;
              case Number(IPparts[0]) >= 234 && Number(IPparts[0]) < 240:
                IPreport.class = 'D EXP'
                break;
              case Number(IPparts[0]) >= 240 && Number(IPparts[0]) <= 255:
                IPreport.class = 'E EXP'
                break;
              default:
                IPreport.class = 'Unknown';
            }

/* ---------------------- COLLECTING HOST/machine-ID and Mask*/
                switch (IPreport.class) {
                  case "A":
                    IPreport.idhost = IPparts[0];
                    IPreport.idmachine = `${IPparts[1]}.${IPparts[2]}.${IPparts[3]}`;
                    IPreport.defaultmask = '255.0.0.0';
                    IPreport.reserved = '10.0.0.0';
                    IPreport.broadcast = '10.255.255.255';
                    IPreport.range = `${IPreport.reserved} - ${IPreport.broadcast}`
                    break;

                  case "B":
                    IPreport.idhost = `${IPparts[0]}.${IPparts[1]}`;
                    IPreport.idmachine = `${IPparts[2]}.${IPparts[3]}`;
                    IPreport.defaultmask = '255.255.0.0';
                    IPreport.reserved = '172.16.0.0';
                    IPreport.broadcast = '172.31.255.255';
                    IPreport.range = `${IPreport.reserved} - ${IPreport.broadcast}`
                    break;

                  case "C":
                    IPreport.idhost = `${IPparts[0]}.${IPparts[1]}.${IPparts[2]}`;
                    IPreport.idmachine = IPparts[3];
                    IPreport.defaultmask = '255.255.255.0';
                    IPreport.reserved = '192.168.0.0';
                    IPreport.broadcast = '192.168.255.255';
                    IPreport.range = `${IPreport.reserved} - ${IPreport.broadcast}`
                    break;

                  case "D":
                  case "E":
                    IPreport.idhost = `${IPparts[0]}.${IPparts[1]}.${IPparts[2]}.${IPparts[3]}`;
                    IPreport.idmachine = 'N/A';
                    IPreport.defaultmask = 'N/A';
                    IPreport.reserved = 'N/A';
                    IPreport.broadcast = 'N/A';
                    IPreport.range = 'N/A'
                    break;
                }

                if (IPreport.class != "Unknown") {

                }
          }
        }

/* ---------------------- CREATING AND VISUALISING REPORT*/

      console.log(IPreport)
      })

