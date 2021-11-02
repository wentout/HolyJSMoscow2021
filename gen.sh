rm public/slides/list.txt
names=$(ls ./public/slides/ | grep -E '\.(json|md|mdx|txt)')
for t in $names; do {
	name=$(echo ./public/slides/$t)
#	count=$(grep -E '(-----|\},\{|\}, \{)' -- $name | wc -l)
	count=$(grep -E '(-----|\},\{)' -- $name | wc -l)
	echo $t $count >> public/slides/list.txt
}; done
cat ./public/slides/list.txt
