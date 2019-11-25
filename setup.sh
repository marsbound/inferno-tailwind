setup() {
    echo Running Setup...
    rm -rf .git
    git init
    npm install
    echo Setup done! Dependencies have been downloaded and a new .git has been added.
}

echo "You're about to replace current git with a new one, are you sure?"
select yn in Yes No; do
    case $yn in
        Yes ) setup; break;;
        No ) exit;;
    esac
done
