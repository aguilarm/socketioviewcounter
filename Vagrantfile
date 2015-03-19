Vagrant.configure("2") do |config|
  config.vm.box = "helium.local.favish.com"
  config.vm.box_url = "http://www.favish.com/boxes/helium.local.favish.com.box"
  config.vm.provider :virtualbox do |vb|
    vb.customize ["modifyvm", :id, "--memory", 2048]
  end

  project = File.expand_path(File.dirname(__FILE__)).split("/").last;

  config.vm.synced_folder "./app", "/home/vagrant/app", :nfs => true
  config.vm.hostname = "#{project}.local.favish.com"

  config.ssh.forward_agent  = true
  config.vm.network :private_network, ip: "10.33.36.11"
end
